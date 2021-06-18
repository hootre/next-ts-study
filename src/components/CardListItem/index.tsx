import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { VFC } from 'react';
import { CardListItemBox } from './styles';
interface Props {
  CardData: {
    contentDetails: {
      duration: string;
    };
    snippet: {
      thumbnails: {
        maxres: {
          url: string;
        };
        standard: {
          url: string;
        };
        high: {
          url: string;
        };
      };
      title: string;
      channelTitle: string;
      publishedAt: string;
    };

    id: string;
  };
}
const CardListItem: VFC<Props> = ({ CardData }) => {
  const router = useRouter();
  const title = router.pathname.split('/')[1];
  return (
    <Link href={title.length > 10 ? CardData.id : `${title}/${CardData.id}`}>
      <CardListItemBox>
        <div className="imgBox">
          <img
            src={
              CardData.snippet.thumbnails.maxres
                ? CardData.snippet.thumbnails.maxres.url
                : CardData.snippet.thumbnails.standard
                ? CardData.snippet.thumbnails.standard.url
                : CardData.snippet.thumbnails.high.url
            }
            alt="thumbnails"
          />
        </div>
        <div className="content">
          <div className="name">{CardData.snippet.title}</div>
          <div className="maker">{CardData.snippet.channelTitle}</div>
          <div className="info">{CardData.snippet.publishedAt.substring(0, 10)}</div>
          <div className="time">{CardData.contentDetails.duration.substring(2, 3)} min</div>
        </div>
      </CardListItemBox>
    </Link>
  );
};

export default CardListItem;
