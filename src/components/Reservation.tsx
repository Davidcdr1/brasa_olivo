import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Reservation() {
    const [date, setDate] = useState('')
    const [people, setPeople] = useState(2)
    const [times, setTimes] = useState<string[]>([])
    const [selectedTime, setSelectedTime] = useState('')

    const [loadingTimes, setLoadingTimes] = useState(false)
    const [booking, setBooking] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [notes, setNotes] = useState('')

    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const today = new Date().toISOString().split('T')[0]

    useEffect(() => {
        let ignore = false

        async function loadTimes() {
            if (!date) {
                setTimes([])
                setSelectedTime('')
                return
            }

            setLoadingTimes(true)
            setError('')
            setSelectedTime('')

            const { data, error } = await supabase.rpc(
                'get_available_times',
                {
                    p_restaurant_id: 1,
                    p_date: date,
                    p_people: people,
                }
            )

            if (ignore) return

            if (error) {
                console.error(error)
                setTimes([])
                setError('No hemos podido consultar los horarios disponibles.')
            } else {

                setTimes(
                    data?.map((item: { reservation_time: string }) => item.reservation_time) ?? []
                )
            }

            setLoadingTimes(false)
        }

        loadTimes()

        return () => {
            ignore = true
        }
    }, [date, people])

    async function handleReservation(
        event: React.FormEvent<HTMLFormElement>
      ) {
        event.preventDefault()
      
        if (!date || !selectedTime) {
          setError('Selecciona una fecha y un horario.')
          return
        }
      
        if (!name.trim() || !email.trim() || !phone.trim()) {
          setError('Completa tu nombre, email y teléfono.')
          return
        }
      
        setBooking(true)
        setError('')
        setSuccess(false)
      
        // 1. Crear la reserva en Supabase
        const { data, error } = await supabase.rpc(
          'create_reservation',
          {
            p_restaurant_id: 1,
            p_date: date,
            p_start_time: selectedTime,
            p_people: people,
            p_customer_name: name,
            p_customer_email: email,
            p_customer_phone: phone,
            p_notes: notes,
          }
        )
      
        if (error) {
          console.error('Error creando reserva:', error)
      
          if (
            error.message.includes('No hay mesas disponibles') ||
            error.message.includes('conflicting key value')
          ) {
            setError(
              'Lo sentimos, ese horario acaba de quedar ocupado. Selecciona otro horario.'
            )
      
            setTimes((currentTimes) =>
              currentTimes.filter((time) => time !== selectedTime)
            )
      
            setSelectedTime('')
          } else {
            setError(
              error.message || 'No hemos podido completar la reserva.'
            )
          }
      
          setBooking(false)
          return
        }
      
        // 2. La reserva ya está guardada.
        // Ahora enviamos los emails.
        const { error: emailError } = await supabase.functions.invoke(
          'send-reservation-email',
          {
            body: {
              customerName: name,
              customerEmail: email,
              customerPhone: phone,
              reservationDate: date,
              reservationTime: selectedTime,
              people,
              notes,
            },
          }
        )

        console.log('EMAIL ERROR:', emailError)
      
        if (emailError) {
          console.error('Reserva creada pero error enviando email:', emailError)
      
          // La reserva sigue siendo válida aunque falle el email.
          setSuccess(true)
          setError(
            'La reserva se ha confirmado, pero no hemos podido enviar el email de confirmación.'
          )
        } else {
          setSuccess(true)
        }
      
        console.log('Reserva creada:', data)
      
        setBooking(false)
      
        setTimes((currentTimes) =>
          currentTimes.filter((time) => time !== selectedTime)
        )
      
        setSelectedTime('')
      }

    return (
        <section
            id="reservas"
            className="bg-stone-950 px-6 py-24 text-stone-100 md:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 max-w-2xl">
                    <p className="mb-3 text-sm uppercase tracking-[0.25em] text-amber-700">
                        Reservas
                    </p>

                    <h2 className="font-serif text-4xl md:text-5xl">
                        Reserva tu mesa
                    </h2>

                    <p className="mt-5 text-stone-400">
                        Elige el día, el número de personas y el horario que prefieras.
                        Te esperamos en Brasa & Olivo.
                    </p>
                </div>

                <form
                    onSubmit={handleReservation}
                    className="grid gap-8 lg:grid-cols-2"
                >
                    {/* DATOS DE LA RESERVA */}
                    <div className="rounded-2xl bg-stone-900 p-6 md:p-8">
                        <h3 className="font-serif text-2xl">
                            1. Datos de la reserva
                        </h3>

                        <div className="mt-6 grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="reservation-date"
                                    className="mb-2 block text-sm text-stone-300"
                                >
                                    Fecha
                                </label>

                                <input
                                    id="reservation-date"
                                    type="date"
                                    min={today}
                                    value={date}
                                    onChange={(event) => setDate(event.target.value)}
                                    className="box-border w-full min-w-0 max-w-full rounded-lg border border-stone-700 bg-stone-800 px-3 py-3 text-white outline-none focus:border-amber-700"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="reservation-people"
                                    className="mb-2 block text-sm text-stone-300"
                                >
                                    Personas
                                </label>

                                <select
                                    id="reservation-people"
                                    value={people}
                                    onChange={(event) =>
                                        setPeople(Number(event.target.value))
                                    }
                                    className="box-border w-full min-w-0 max-w-full rounded-lg border border-stone-700 bg-stone-800 px-3 py-3 text-white outline-none focus:border-amber-700"
                                >
                                    {Array.from({ length: 8 }, (_, index) => index + 1).map(
                                        (number) => (
                                            <option key={number} value={number}>
                                                {number} {number === 1 ? 'persona' : 'personas'}
                                            </option>
                                        )
                                    )}
                                </select>
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="mb-3 text-sm text-stone-300">
                                Horario
                            </p>

                            {!date && (
                                <p className="text-sm text-stone-500">
                                    Selecciona primero una fecha.
                                </p>
                            )}

                            {date && loadingTimes && (
                                <p className="text-sm text-stone-400">
                                    Consultando disponibilidad...
                                </p>
                            )}

                            {date && !loadingTimes && times.length === 0 && !error && (
                                <p className="text-sm text-stone-500">
                                    No hay horarios disponibles para esta fecha.
                                </p>
                            )}

                            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                {times.map((time) => {
                                    const isSelected = selectedTime === time

                                    return (
                                        <button
                                            key={time}
                                            type="button"
                                            onClick={() => setSelectedTime(time)}
                                            className={`rounded-lg border px-4 py-3 text-sm transition ${isSelected
                                                    ? 'border-amber-700 bg-amber-700 text-white'
                                                    : 'border-stone-700 bg-stone-800 text-stone-200 hover:border-amber-700'
                                                }`}
                                        >
                                            {String(time).slice(0, 5)}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {selectedTime && (
                            <div className="mt-6 rounded-lg border border-amber-900/50 bg-amber-950/20 p-4 text-sm">
                                <span className="text-stone-400">
                                    Has seleccionado:
                                </span>{' '}
                                <strong>
                                    {date} · {String(selectedTime).slice(0, 5)}· {people}{' '}
                                    {people === 1 ? 'persona' : 'personas'}
                                </strong>
                            </div>
                        )}
                    </div>

                    {/* DATOS DEL CLIENTE */}
                    <div className="rounded-2xl bg-stone-100 p-6 text-stone-900 md:p-8">
                        <h3 className="font-serif text-2xl">
                            2. Tus datos
                        </h3>

                        <div className="mt-6 space-y-5">
                            <div>
                                <label
                                    htmlFor="reservation-name"
                                    className="mb-2 block text-sm"
                                >
                                    Nombre
                                </label>

                                <input
                                    id="reservation-name"
                                    type="text"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                    placeholder="Tu nombre"
                                    className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 outline-none focus:border-amber-700"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="reservation-email"
                                    className="mb-2 block text-sm"
                                >
                                    Email
                                </label>

                                <input
                                    id="reservation-email"
                                    type="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    placeholder="tu@email.com"
                                    className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 outline-none focus:border-amber-700"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="reservation-phone"
                                    className="mb-2 block text-sm"
                                >
                                    Teléfono
                                </label>

                                <input
                                    id="reservation-phone"
                                    type="tel"
                                    value={phone}
                                    onChange={(event) => setPhone(event.target.value)}
                                    placeholder="600 000 000"
                                    className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3 outline-none focus:border-amber-700"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="reservation-notes"
                                    className="mb-2 block text-sm"
                                >
                                    Notas
                                    <span className="ml-2 text-stone-400">
                                        (opcional)
                                    </span>
                                </label>

                                <textarea
                                    id="reservation-notes"
                                    value={notes}
                                    onChange={(event) => setNotes(event.target.value)}
                                    placeholder="Alergias, ocasión especial..."
                                    rows={4}
                                    className="w-full resize-none rounded-lg border border-stone-300 bg-white px-4 py-3 outline-none focus:border-amber-700"
                                />
                            </div>
                        </div>

                        {error && (
                            <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
                                {error}
                            </div>
                        )}

                        {success && (
                            <div className="mt-6 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                                <strong>¡Reserva confirmada!</strong>
                                <p className="mt-1">
                                    Hemos registrado tu reserva correctamente.
                                </p>
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={booking || !selectedTime}
                            className="mt-6 w-full rounded-lg bg-stone-950 px-6 py-4 text-sm font-medium text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {booking
                                ? 'Confirmando reserva...'
                                : 'Confirmar reserva'}
                        </button>

                        <p className="mt-4 text-center text-xs text-stone-500">
                            La reserva tiene una duración aproximada de 2 horas.
                        </p>
                    </div>
                </form>
            </div>
        </section>
    )
}