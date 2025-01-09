import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is Your Wallet free to use?",
    answer: "Yes, creating and using the basic features of Your Wallet is completely free.",
    value: "item-1",
  },
  {
    question: "How do I convert my digital funds to fiat currency?",
    answer:
      "You can easily convert your digital assets into fiat currency via the integrated Visa card, which allows you to make purchases and transactions globally.",
    value: "item-2",
  },
  {
    question: "Are there any hidden fees when using the Visa card?",
    answer:
      "No, there are no hidden fees. The only charges apply when making international transactions or ATM withdrawals, as per the Visa card terms.",
    value: "item-3",
  },
  {
    question: "Is my wallet secure?",
    answer: "Yes, Your Wallet is protected with advanced encryption and multi-layer security to ensure your funds are safe.",
    value: "item-4",
  },
  {
    question: "Can I use the wallet anywhere in the world?",
    answer: "Yes, Your Wallet is accessible globally. You can make transactions and use the Visa card in any country that accepts Visa.",
    value: "item-5",
  },
  {
    question: "How quickly are my transactions processed?",
    answer: "Transactions are processed instantly for most operations, including digital fund conversions and Visa card payments.",
    value: "item-6",
  },
];


export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
