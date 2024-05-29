import ContactForm from "@/components/ContactForm";
import { Typography } from "@mui/material";

export default function Contact(){
    return(
        <main className=" container flex justify-center items-center flex-col gap-y-4 my-5">
            <Typography variant="h4">Send me an email :)</Typography>
            <ContactForm></ContactForm>
        </main>
    )
}