export default function Result({ resistorValue="Calculando..." }) {
  return (
    <>
      <div className="w-full text-center my-5">
        <h2 className="text-2xl font-bold">{ resistorValue }</h2>
      </div>
    </>
  )
}
