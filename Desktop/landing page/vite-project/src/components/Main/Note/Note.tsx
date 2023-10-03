interface NoteProps {
  header: string;
  text: string;
}

export default function Note({ header, text }: NoteProps) {
  return (
    <div className="py-4 flex flex-col w-1/2 bg-white justify-center items-center">
      <p className="text-2xl">{header}</p>
      <p className="text-center">{text}</p>
    </div>
  );
}
