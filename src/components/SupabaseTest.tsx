import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabaseClient'

type RestaurantTable = {
  id: number
  name: string
  capacity: number
}

export default function SupabaseTest() {
  const [tables, setTables] = useState<RestaurantTable[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadAvailableTables() {
      const { data, error } = await supabase.rpc(
        'get_available_tables',
        {
          p_restaurant_id: 1,
          p_date: '2026-10-17',
          p_start_time: '21:00',
          p_people: 4,
        }
      )

      if (error) {
        setError(error.message)
        return
      }

      setTables(data ?? [])
    }

    loadAvailableTables()
  }, [])

  return (
    <div>
      <h2>Mesas disponibles</h2>

      <p>
        17 de octubre de 2026 · 21:00 · 4 personas
      </p>

      {error && <p>Error: {error}</p>}

      {tables.length === 0 && !error && (
        <p>No hay mesas disponibles.</p>
      )}

      {tables.map((table) => (
        <p key={table.id}>
          {table.name} — {table.capacity} personas
        </p>
      ))}
    </div>
  )
}