import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/reset.css";
import "./css/style.css";
import CombineMenu from "./CombineMenu";
import Loading from "./Loading";

const PokemonList = () => {
  const navigate = useNavigate();
  // const { state } = useLocation();
  const [data, setData] = useState<any>([]);

  const [loading, setLoading] = useState(true);

  const [filterInput, setFilterInput] = useState("");
  const [filterSelect, setFilterSelect] = useState("all");
  const filterOptions = [
    { value: "all", name: "all" },
    { value: "grass", name: "grass" },
    { value: "poison", name: "poison" },
    { value: "fire", name: "fire" },
    { value: "flying", name: "flying" },
    { value: "water", name: "water" },
    { value: "bug", name: "bug" },
    { value: "normal", name: "normal" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const pokemonData = [];

      for (let i = 1; i <= 20; i++) {
        try {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${i}`
          );
          pokemonData.push(response.data);
        } catch (error) {
          console.log(error, `pokemon ${i}`);
        }
      }

      setData(pokemonData);
      setLoading(false);
    };

    fetchData();
  }, []);

  const filteredData = data.filter((item: any) => {
    if (item.name.toLowerCase().includes(filterInput.toLowerCase()) === false) {
      console.log("없음");
    } else {
      if (filterSelect === "all") {
        return item.name.toLowerCase().includes(filterInput.toLowerCase());
      } else {
        return (
          item.name.toLowerCase().includes(filterInput.toLowerCase()) &&
          item.types.some((type: any) => type.type.name === filterSelect)
        );
      }
    }
  });

  // data?.map((item: any, index: number) => console.log(item, "<== sprities"));

  // console.log(filteredData.item.name, "<-filteredData");

  // filteredData?.map((it: any) =>
  //   console.log(it.sprites.front_default, "<==it")
  // );

  // filteredData?.map((it: any) => console.log(it.sprites.back_default, "<==it"));
  filteredData?.map((it: any) => console.log(it.abilities.ability, "<==it"));

  return (
    <div className="pokemon-list">
      {loading ? (
        <Loading />
      ) : (
        <>
          <CombineMenu />

          <h1 className="main-tit">Pokemon List</h1>
          <form className="pokemon-search">
            <label htmlFor="types">type:</label>
            <select
              id="types"
              value={filterSelect}
              onChange={(e) => {
                setFilterSelect(e.target.value);
              }}
            >
              {filterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.name}
                </option>
              ))}
            </select>

            <label htmlFor="types">Character name:</label>
            <input
              type="text"
              placeholder="Please enter your character name..."
              value={filterInput}
              onChange={(e) => {
                setFilterInput(e.target.value);
              }}
              className="search_input"
            />
          </form>
          <ul className="pokemon-cont">
            {filteredData?.map((item: any, index: number) => (
              <li
                onClick={() =>
                  navigate(item.name, {
                    state: {
                      name: item.name,
                      height: item.height,
                      weight: item.weight,
                      front_default: item.sprites.front_default,
                      a: item.sprites.back_default,
                    },
                  })
                }
                key={`list_${index}`}
              >
                <span className="order"># {item.order}</span>
                <h2 className="name">{item.name}</h2>
                <img key={`list_${index}`} src={item.sprites.front_shiny} />

                <div>
                  {item?.types?.map((item: any, idx: any) => (
                    <p
                      key={`${idx}_${item.ability}`}
                      className={
                        item.type.name == "grass"
                          ? "grass"
                          : item.type.name == "water"
                          ? "water"
                          : item.type.name == "fire"
                          ? "fire"
                          : item.type.name == "bug"
                          ? "bug"
                          : item.type.name == "normal"
                          ? "normal"
                          : item.type.name == "poison"
                          ? "poison"
                          : item.type.name == "flying"
                          ? "flying"
                          : ""
                      }
                    >
                      {item.type.name}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default PokemonList;
