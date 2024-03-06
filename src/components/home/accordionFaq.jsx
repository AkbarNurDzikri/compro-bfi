import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import faqList from "@/utils/home/faqList";

const AccordionFaq = () => {
  return (
    <div>
      {faqList.map((faqItem) => (
        <Accordion key={faqItem.label}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            {faqItem.label}
          </AccordionSummary>
          <AccordionDetails>{faqItem.children}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default AccordionFaq;
