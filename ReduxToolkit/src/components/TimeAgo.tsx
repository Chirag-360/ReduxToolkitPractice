import { parseISO ,  formatDistanceToNow} from "date-fns";

import React from 'react'

export const TimeAgo = ({timeStamp}) => {

    console.log(timeStamp)
    let timeAgo = ""
    if(timeStamp){
        const date = parseISO(timeStamp)
        const timePeriod = formatDistanceToNow(date)
        timeAgo = `${timePeriod} ago`
    }
  return (
    <span>&nbsp;<i>{timeAgo}</i></span>
  )
}
