import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { deepOrange } from "@mui/material/colors";

export default function ImageAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        alt="darshana Perera"
        src="https://scontent.fcmb4-2.fna.fbcdn.net/v/t1.6435-9/201167614_997801037696615_424427897446683562_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=oomhDR3SvgQAX_dWdXh&_nc_ht=scontent.fcmb4-2.fna&oh=23b280e81df52462be1033ee33c8b7f2&oe=618A507F"
        sizes=""
      >
        Ds
      </Avatar>
    </Stack>
  );
}
