"use client";
import { Tab, Tabs } from "@nextui-org/tabs";
import { useState } from "react";
import { BsPersonExclamation } from "react-icons/bs";
import { CgEnter } from "react-icons/cg";
import { FaMusic } from "react-icons/fa6";
import { GiLovers } from "react-icons/gi";
import { MdPhotoAlbum } from "react-icons/md";
type tabs = "photos" | "love" | "amando";
export default function ProjectsTabs() {
  const [selected, setSelected] = useState<"photos" | "love" | "amando">(
    "photos"
  );
  return (
    <div>
      <Tabs
        selectedKey={selected}
        onSelectionChange={(key) => setSelected(key as tabs)}
      >
        <Tab
          className="rounded-md border border-foreground px-3 py-1"
          key={"photos"}
          title={
            <div className="flex items-center space-x-2">
              <MdPhotoAlbum color="#b1d2d1" size={20} />
              <span>Photos</span>
            </div>
          }
        >
          <p className="text-center my-2 underline ">Josefino 1</p>
        </Tab>
        <Tab
          className="rounded-md border border-foreground px-3 py-1"
          key={"love"}
          title={
            <div className="flex items-center space-x-2">
              <GiLovers color="#b1d2d1" size={20} />
              <span>Love</span>
            </div>
          }
        >
          <p className="text-center my-2 underline ">Josefino 2</p>
        </Tab>
        <Tab
          className="rounded-md border border-foreground px-3 py-1"
          key={"amando"}
          title={
            <div className="flex items-center space-x-2">
              <BsPersonExclamation color="#b1d2d1" size={20} />
              <span>Amando</span>
            </div>
          }
        >
          <p className="text-center my-2 underline ">Josefino 3</p>
        </Tab>
      </Tabs>
    </div>
  );
}
