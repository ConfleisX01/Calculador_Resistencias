export default function Selection({
  value1 = "vacio",
  value2 = "vacio",
  value3 = "vacio",
}) {
  return (
    <>
      <div className="overflow-x-auto my-5">
        <p className="text-center font-bold">Selección</p>
        <table className="table table-zebra">
          <thead>
            <tr className="bg-indigo-500">
              <th>{value1}</th>
              <th>{value2}</th>
              <th>{value3}</th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}
