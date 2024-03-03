import React, { useState } from "react";
import "./SelectChat.css";

import gpt3 from "../../assets/models/gpt3.png";
import gpt4 from "../../assets/models/gpt4.png";
import gpalm from "../../assets/models/gpalm.png";
import gemini from "../../assets/models/gemini.png";
import imgen from "../../assets/models/imgen.png";
import { useModel } from "../../hooks/context/use-model";
import { changeChatModel } from "../../actions/chat";
import { useParams } from "react-router-dom";

export default function SelectChat() {
  const chatModels = [
    {
      label: "ChatGPT",
      img: gpt3,
      value: "ChatGPT",
    },
    {
      label: "GPT-4",
      img: gpt4,
      value: "GPT4",
    },
    {
      label: "Google PaLM 2",
      img: gpalm,
      value: "Google PalM 2",
    },
    {
      label: "Google Gemini",
      img: gemini,
      value: "rep",
    },
    {
      label: "Image Generation",
      img: imgen,
      value: "ImageGenerator",
    },
  ];

  const { selectedModel, setSelectedModel } = useModel();
  const params = useParams();

  const onChange = async (e) => {
    const selectedValue = e.target.value;
    setSelectedModel(selectedValue);
    params.id && (await changeChatModel(params.id, selectedValue));
  };

  return (
    <div className="container mb-4 mt-3 position-relative">
      <div className="select">
        <select
          className="form-select d-block d-sm-none mb-3"
          value={selectedModel}
          onChange={onChange}
        >
          {chatModels.map((model) => (
            <option key={model.label} value={model.value}>
              {model.label}
            </option>
          ))}
        </select>
      </div>

      <div className="models-container">
        {chatModels.map((model) => (
          <div
            key={model.label}
            className={`model ${
              model.value === selectedModel && "active-model"
            }`}
            onClick={() => onChange({ target: { value: model.value } })}
          >
            <img src={model.img} alt="" />
            <p className="m-0">{model.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
