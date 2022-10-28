import React, { useContext } from "react";
import Filter02Context from "../../context/filter02_context";

import styled from "styled-components";

const Sort = () => {
  const filterCtx = useContext(Filter02Context);
  const {
    filters: { text },
    updateFilters,
  } = filterCtx;

  return (
    <Wrapper>
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <div className="search-container">
          <input type="text" name="text" value={text} placeholder="선수를 검색해보세요" onChange={updateFilters} />
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100vw;
  margin-bottom: 3rem;
  .search-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1em 0;
  }
  .search-container input {
    border: none;
    background-color: transparent;
    width: 80%;
    border-bottom: 2px solid var(--color-pri-alt);
    padding: 1em 0.3em;
  }
  .search-container input:focus {
    outline: none;
    border: none;
    border-bottom: 2px solid red;
    border-bottom-color: red;
  }
  .search-container button {
    padding: 1em 2em;
    margin-left: 1em;
    background-color: darkslategray;
    color: #ffffff;
    border-radius: 5px;
    margin-top: 0.5em;
    cursor: pointer;
  }

  @media (min-width: 992px) {
    width: 50vw;
    .search-container {
      display: block;
    }
    .search-container input {
      width: 60%;
    }
  }
`;

export default Sort;
