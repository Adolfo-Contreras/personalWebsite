import { FormControl, Paper, FormLabel, OutlinedInput, Button } from "@mui/material";

export default function ContactForm() {
    return (
        <>
        <Paper className=" w-4/5 mx-auto flex flex-col p-4 gap-3.5">
            <FormControl>
              <FormLabel>Name</FormLabel>
              <OutlinedInput placeholder="John Doe"/>
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <OutlinedInput placeholder="email@example.com"/>
            </FormControl>

            <FormControl>
              <FormLabel>Message Field</FormLabel>
              <OutlinedInput placeholder="Hey Adolfo..." multiline minRows={3}/>
            </FormControl>

            <Button variant="contained" type="submit">Send</Button>
        </Paper>
        </>
    )
}