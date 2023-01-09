import React from "react";

const Table = ({ schedule = [] }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Speaker</th>
            <th scope="col">Topic</th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{item.date}</th>
                <td>{item.speaker}</td>
                <td>{item.topic}</td>
                <td>
                  <a href={item.link} target="_blank">
                    {item.link}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
