interface NoteProps {
  header: string;
  text: string;
}

export default function Note({ header, text }: NoteProps) {
  return (
    <div className="py-4 flex flex-col w-1/2 justify-center items-center">
      <p className="text-2xl">{header}</p>
      <p className="text-center text-sm text-gray-500 px-16">{text}</p>
    </div>
  );
}
