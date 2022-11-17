import { motion } from "framer-motion";
import { FC, useState } from "react";
import { currentStatus } from "../../../pages/manage/myplant/[potseq]";
import WeekPicker from "../add/WeekPicker";
import PlantInfo from "../PlantInfo";
import PlantStatus from "../PlantStatus";

interface Props {
  tab: number;
  plantStatus: currentStatus;
}

const TabContents: FC<Props> = ({ tab, plantStatus }) => {
  const [wateringLogs, setWateringLogs] = useState("");

  return (
    <>
      {!tab ? (
        <motion.div
          className="moveToLeft"
          key={tab}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, visibility: "hidden" }}
          transition={{ delay: 0.1, duration: 1 }}
        >
          <PlantInfo plantStatus={plantStatus} />
        </motion.div>
      ) : (
        <motion.div
          className="moveToLeft"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 1 }}
          exit={{ opacity: 0, visibility: "hidden" }}
        >
          <WeekPicker setWateringLogs={setWateringLogs} />
          <p className="logs">{wateringLogs !== "" && wateringLogs}</p>
          <PlantStatus />
        </motion.div>
      )}
    </>
  );
};

export default TabContents;
