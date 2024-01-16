type Props = {
  url: string | undefined | null;
};

export default function Avatar({ url }: Props) {
  return <img src={url} alt={"프로필이미지"} width={50} height={50} />;
}
