import { Helmet } from "react-helmet";
import { Analytics } from "@vercel/analytics/react";


const SEOstuff = () => {
  return (
    <div>
      <Analytics />
      <Helmet>
      <title>BTM Library Hours & Calendar</title>
      <meta
        name="description"
        content="Check BTM Library hours and view upcoming closures to plan your study sessions effectively."
      />
      <meta
        name="keywords"
        content="BTM library, library hours, library calendar, closures, study planning"
      />
    </Helmet>
      {/* <Schema
      orgName="BTM Library"
      openingHoursSpecification={[
        {
          dayOfWeek: [, "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:30:00",
          closes: "20:00:00",
        },

        {
          dayOfWeek: [
            "Second Tuesday",
            "Forth Saturday",
            "Monday",
            "All Government holidays",
          ],
          closes: "Closed", // Indicate closure
        },
      ]}
    /> */}
    </div>
  );
};

export default SEOstuff;
