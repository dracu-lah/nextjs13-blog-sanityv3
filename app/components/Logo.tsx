function Logo(props: any) {
  const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
      <img
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="https://avatars.githubusercontent.com/u/110589548?v=4"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
