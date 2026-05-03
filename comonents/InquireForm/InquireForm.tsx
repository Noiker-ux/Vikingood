import { TextField } from "@mui/material";

export default function InquireForm() {
  return (
    <form>
      <div className="flex justify-between">
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </div>
    </form>
  );
}
