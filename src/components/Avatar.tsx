type Props = {
  image?: string | null;
};

export default function Avatar({ image }: Props) {
  return (
    <div className="w-9 h-9 rounded-full bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300 p-[0.15rem]">
      {/*eslint-disable-next-line @next/next/no-img-element*/}
      <img
        className="rounded-full p-[0.1]"
        src={image ?? undefined}
        alt={"user profile"}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
