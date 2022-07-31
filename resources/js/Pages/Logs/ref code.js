{logs.data.map((log) =>
     <tr key={log.id}>

          <td>{log.id}</td>
          <td>{log.logdata.type}</td>
          <td>{log.logdata.data.map(
               (item, index) =>
                    <div key={index}>
                         {item}
                        
                         {/* {Object.entries(item).map(([key, value], index) =>
                              <div key={index}>{key} : {value}
                              </div>)} */}

                         {/* {Object.entries(item).map(
                              (d) => <div> {console.log(d)} </div>
                         )} */}
                    </div>)}
          </td>

          {/* <td>
               {Object.keys(log.logdata.data).forEach(
                    (key) => log.logdata.data[key].forEach((data, i) => console.log(data))
               )}
{d.map((value) => <>{value}</>)} 
          </td> */}
     </tr>
)}