import React from "react";
import moment from "moment";
import { TiPinOutline } from "react-icons/ti";
import { MdOutlineCreate, MdOutlineDelete } from "react-icons/md";

const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onPinNote,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="border rounded p-4 bg-white hover:shadow-xl hover:scale-105 transition-all ease-in-out shadow-lg shadow-cyan-300/30">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-xl font-medium">{title}</h6>
          <span className="text-xs text-green-700">
            {moment(date).format("Do MMM YYYY")}
          </span>
        </div>

        <TiPinOutline
          className={`icon-btn hover:text-blue-500 ${
            isPinned ? "text-[#2B85FF] " : "text-slate-300"
          }`}
          onClick={onPinNote}
        />
      </div>

      <p className="text-xm text-slate-700 mt-2">{content?.slice(0, 60)}</p>

      <div className="flex items-center justify-between mt-2">
        <div className="text-xm text-slate-500">
          {tags.map((item) => `#${item} `)}
        </div>

        <div className="flex items-center gap-2">
          <MdOutlineCreate
            className="icon-btn text-orange-400 hover:text-orange-500"
            onClick={onEdit}
          />

          <MdOutlineDelete
            className="icon-btn text-red-700 hover:text-red-800"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
