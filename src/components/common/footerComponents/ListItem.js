const ListItem = ({ text, route }) => {
  return (
    <a href={route}>
      <li className="font-Archivo text-[15px] font-[300] leading-[20.8px] text-[rgba(255,255,255,0.75)] md:text-[15px]">
        {text}
      </li>
    </a>
  );
};

export default ListItem;
