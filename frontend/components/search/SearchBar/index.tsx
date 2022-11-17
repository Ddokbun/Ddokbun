import React, { useEffect, useState } from "react";
import { ModalWapper, Wrapper } from "./styles";
import { SearchInput } from "../../../common/Input";
import { PlantListArray } from "../../../types/search/searchbar.interface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";
import { faCamera, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { SearchBtn } from "../../../common/Button";
import { Theme } from "../../../styles/theme";
import { fetchItemSeq, postPicture } from "../../../apis/search";
import router from "next/router";

const SearchBar: React.FC<{ plants: PlantListArray }> = ({ plants }) => {
  const [searchInput, setSearchInput] = useState("");
  const [plantList, setPlantList] = useState(plants);
  const [modalIsOpen, setIsOpen] = useState(false);

  const setFile = async (event: any) => {
    const data = postPicture(event.target.files[0]);
    const res = fetchItemSeq(await data);
    const plantSeq = await res;
    if (plantSeq === undefined) {
      alert("해당하는 값을 찾지 못했습니다. 다시 검색을 시도해주세요.");
      window.location.replace("/search/camera");
    } else {
      router.push(`/commerce/product/${plantSeq}`);
    }
    router.push(`/commerce/product/${plantSeq}`);
  };
  function openModal() {
    setIsOpen(true);
    console.log("모달열림");
  }
  function afterOpenModal() {
    console.log("모달 변경");
  }
  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
    },
  };
  useEffect(() => {
    if (searchInput === "" || searchInput === null) {
      setPlantList(plants);
      return;
    }
    const newData = plants.filter(plant => {
      return plant.plantName.includes(searchInput);
    });

    setPlantList(newData);
  }, [plants, searchInput]);
  return (
    <Wrapper>
      <div className="title">
        <h2>어떤 식물을 찾고 계신가요?</h2>
      </div>
      <div className="search">
        <SearchInput
          placeholder="찾는 식물 이름을 검색해주세요."
          disabled={false}
          setSearchInput={setSearchInput}
          value={searchInput}
          path={"search"}
        ></SearchInput>

        <button onClick={openModal}>
          <div className="camera">
            <FontAwesomeIcon icon={faCamera} size="2x"></FontAwesomeIcon>
            <h3>사진으로 검색하기</h3>
          </div>
        </button>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onRequestClose={closeModal}
        >
          <ModalWapper>
            <h1>사진으로 식물을 검색해보세요!</h1>
            <div className="button-wrap">
              <div className="file-select">
                <label htmlFor="camera-file">갤러리</label>
                <input
                  type={"file"}
                  id="camera-file"
                  onChange={setFile.bind(this)}
                ></input>
              </div>
              <SearchBtn color={Theme.color.ivory} path={`search/camera`}>
                카메라 촬영
              </SearchBtn>
            </div>
          </ModalWapper>
        </Modal>
      </div>
      <div></div>
    </Wrapper>
  );
};

export default SearchBar;
