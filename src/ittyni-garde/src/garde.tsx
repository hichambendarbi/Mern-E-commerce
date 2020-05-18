import * as React from "react";
import styled from "styled-components";

interface Props {
  // status: PersonalStatus;
}

export const Garde: React.FunctionComponent<Props> = props => {
  const modal = () => <div>this is a modal</div>;
  const date = new Date();
  let newDate = date.setDate(date.getDate() + 30);
  return (
    <div>
      <h1>Garde</h1>
      <hr />
      <h3>Selectionner le mois</h3>
      <p>
        Mois :
        <select>
          <option>Janvier</option>
          <option>Fevrier</option>
          <option>Mars</option>
          <option>Avril</option>
          <option>Mai</option>
          <option>Juin</option>
          <option>Juillet</option>
          <option>Aout</option>
          <option>Septembre</option>
          <option>Octobre</option>
          <option>Decembre</option>
        </select>
        Annee : <input />
      </p>
      <hr />
      ajouter garde : <button>Technicien</button> <button> resident </button>
      <button>secretaire</button>
      <hr />
      <p>
        date de debut : <input />
        date de fin : <input />
      </p>
      <p>
        selectionner :
        <select>
          <option>Jour</option>
          <option>Nuit</option>
        </select>
        impaire ou pair :
        <select>
          <option>pair</option>
          <option>impair</option>
        </select>
      </p>
      <p>
        unite :
        <select>
          <option>biochimie</option>
          <option>hematologie</option>
          <option>bacteriologie</option>
        </select>
      </p>
      <p>
        <button>Valider</button>
        <button onClick={e => modal()}>Ajouter Garde</button>
      </p>
      <hr />
      <h2>Recap</h2>
      <div style={{ width: "99%" }}>
        <Table className="table table-hover">
          <thead>
            <TableRow>
              <th>Debut </th>
              <th>Fin </th>
              <th>Nom </th>
              <th>Prenom </th>
              <th>Unite </th>
              <th>Status </th>
              <th>J/N </th>
              <th>P/I </th>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <td>2020-03-01</td>
              <td>2020-03-15</td>
              <td>Bendaoued</td>
              <td>Hmida</td>
              <td>Biochimie</td>
              <td>Technicien</td>
              <td>Jour</td>
              <td>1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31</td>
            </TableRow>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

const Table = styled.table`
  border: 1;
`;

const TableRow = styled.tr`
  th td {
    border: 1px solid #000;
    padding: 5px;
  }
  th {
    text-align: inherit;
    /* width: 150px; */
  }

  td {
    /* width: 150px; */
  }
`;
