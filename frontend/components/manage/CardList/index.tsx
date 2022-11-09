import { motion } from "framer-motion";
import { FC } from "react";
import { PlantListType } from "../../../pages/manage/[userseq]";
import CardItem from "../CardItem";
import { Wrapper } from "./styles";

interface Props {
  plantsList: PlantListType[];
}

const CardList: FC<Props> = ({ plantsList }) => {
  return (
    <Wrapper>
      {plantsList?.map(plant => {
        return (
          <motion.li key={plant.potSerial}>
            <CardItem
              plantSeq={plant.plantSeq}
              potSerial={plant.potSerial}
              plantNickname={plant.plantNickname}
            />
          </motion.li>
        );
      })}
    </Wrapper>
  );
};

export default CardList;
