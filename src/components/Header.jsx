export default function Header({ title }) {
  return (
    <>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">{title}</h1>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH7nVqXdCAEoM-jJv3P0UzM8KYRlC0Fr_ZZA&s"
              alt="Imagen resistencia"
              className="md:w-30 text-center"
            />
          </div>
        </div>
      </div>
    </>
  );
}
