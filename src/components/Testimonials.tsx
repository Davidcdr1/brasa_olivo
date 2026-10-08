import { testimonials } from "../data/testimonials"

function Testimonials() {
  return (
    <section className="bg-[#f4efe6] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#71804f]">
            Lo que dicen de nosotros
          </p>

          <h2 className="mt-5 text-5xl font-medium tracking-[-0.04em] md:text-7xl">
            Una mesa que deja huella.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col justify-between rounded-[1.5rem] bg-white p-8"
            >
              <div>
                <div className="flex gap-1 text-[#71804f]" aria-label={`${testimonial.rating} de 5 estrellas`}>
                  {"★".repeat(testimonial.rating)}
                </div>

                <blockquote className="mt-6 text-lg leading-8 text-black/70">
                  “{testimonial.text}”
                </blockquote>
              </div>

              <div className="mt-10 border-t border-black/10 pt-5">
                <p className="font-medium">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-black/45">
                  {testimonial.occasion}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials