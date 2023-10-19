import { useLocation, useNavigate } from "react-router-dom";

import "./css/reset.css";
import "./css/style.css";
import "./css/pokemon_type.css";
import CombineMenu from "./CombineMenu";

function PokemonDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();

  console.log(state.a);
  const onClickBtn = () => {
    navigate(-1);
  };
  return (
    <div className="pokemon-detail">
      <CombineMenu />

      <button className="go-back-btn" onClick={onClickBtn}>
        X
      </button>
      <h2 className="name">{state.name}</h2>
      <img className="detail-img" src={state.front_default} />

      <div className="characteristic">
        height:{state.height}
        weight:{state.weight}
      </div>
      <div>{state.abilities}</div>
      <img className="detail-img" src={state.a} />
    </div>
  );
}

export default PokemonDetail;
