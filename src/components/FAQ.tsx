import Accordion from "./Accordion"

const faqs = [
    {
        title: 'Who can attend Tedx?',
        answer: 'Xyz can attend'
    },
    {
        title: 'Who can attend Tedx?',
        answer: 'Xyz can attend'
    },
    {
        title: 'Who can attend Tedx?',
        answer: 'Xyz can attend'
    },
    {
        title: 'Who can attend Tedx?',
        answer: 'Xyz can attend'
    },
    {
        title: 'Who can attend Tedx?',
        answer: 'Xyz can attend'
    },
]

const FAQ = () => {
    return (
    <div id="faq" className="flex flex-col items-center pt-4 py-16 bg-black">
        <div className="relative flex flex-col items-center justify-center w-full my-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-light uppercase tracking-widest">
            <span className="font-bold text-red-600">FAQ</span>
          </h2>
        </div>
        <div className="w-[80vw] md:w-[60vw] p-4 rounded-lg flex flex-col mb-10">
          {faqs.map(faq => 
            <Accordion
                title={faq.title}
                answer={faq.answer}
            />
          )}
        </div>
      </div>
    )
}

export default FAQ;