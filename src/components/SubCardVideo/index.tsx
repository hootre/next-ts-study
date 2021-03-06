import { Author } from '@components/MainCardVideo/styles';
import Link from 'next/link';
import { VFC } from 'react';
import { SubCardBox } from './styles';

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
  titleName: string;
}
const SubCardVideo: VFC<Props> = ({ CardData, titleName }) => {
  return (
    <Link href={`${titleName}/${CardData.id}`}>
      <SubCardBox>
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
        <div className="wrapper">
          <Author className="author">
            <div className="img">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
              <img src="https://yt3.ggpht.com/ytc/AAUvwngS5-09zaSrCJLnXd-neDFYwdJACaShRyp9ubzcNA=s88-c-k-c0x00ffffff-no-rj"></img>
            </div>
          </Author>
          <div className="contentBox">
            <div className="maker">{CardData.snippet.channelTitle}</div>
            <div className="name">{CardData.snippet.title}</div>
            <div className="view">{CardData.snippet.publishedAt.substring(0, 10)}</div>
          </div>
        </div>
      </SubCardBox>
    </Link>
  );
};

export default SubCardVideo;
