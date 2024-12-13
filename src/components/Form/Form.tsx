import { useState } from "react";
import { FormDataType } from "../../types/form";

import {
  FIRSTNAME_CHARACTER_SIZE,
  LASTNAME_CHARACTER_SIZE,
} from "../../constants.ts";

import "./form.css";

interface FormProps {
  onSubmit: (data: FormDataType) => void;
}

export default function Form({ onSubmit }: FormProps) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [image, setImage] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ firstname, lastname, image });
      }}
    >
      <h2>
        Bienvenue au <strong>Live Coding Session</strong>
      </h2>
      <p>
        Confirm ta présence en remplissant le formulaire ci dessous et par la
        suite télécharger l'image avec le bouton en dessous.
      </p>

      <p className="note">
        <strong>NB:</strong> aucune information ne sera sauvegarder.
      </p>

      <div className="coolinput">
        <label htmlFor="firstname" className="text">
          Votre nom :
        </label>
        <input
          id="firstname"
          className="input"
          required
          name="firstname"
          type="text"
          maxLength={FIRSTNAME_CHARACTER_SIZE}
          placeholder="Nom"
          onChange={(e) => setFirstname(e.target.value)}
        />

        <p className="note">({FIRSTNAME_CHARACTER_SIZE} charactères au max)</p>
      </div>

      <div className="coolinput">
        <label htmlFor="lastname" className="text">
          Votre prénom :
        </label>
        <input
          id="lastname"
          className="input"
          name="lastname"
          type="text"
          maxLength={LASTNAME_CHARACTER_SIZE}
          placeholder="Prénom"
          onChange={(e) => setLastname(e.target.value)}
        />
        <p className="note">({LASTNAME_CHARACTER_SIZE} charactères au max)</p>
      </div>

      <div className="form-group">
        <label htmlFor="image"></label>
        <div>
          <input
            id="image"
            name="image"
            type="file"
            required
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setImage(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
        </div>
      </div>

      <div className="form-group">
        <input id="image" name="image" type="submit" value="Generate" />
      </div>
    </form>
  );
}
