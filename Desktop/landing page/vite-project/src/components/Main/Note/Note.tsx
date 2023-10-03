interface NoteProps {
  header: string;
  text: string;
}

export default function Note({ header, text }: NoteProps) {
  return (
    <div className="py-4 flex flex-col w-[90%] sm:w-[70%] md:w-1/2 justify-center items-center">
      <p className="text-lg sm:text-xl md:text-2xl text-center">{header}</p>
      <p className="text-center text-sm text-gray-500 md:px-16">{text}</p>
    </div>
  );
}
