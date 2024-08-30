import { useState } from 'react';
import Grid2 from '@mui/material/Grid2';
import AccordionList from '../../components/AccordianList';
import DetailCard from '../../components/DetailCard';
import './home.scss';
import { useEffect } from 'react';

/**
 * Home is the main Landing page of the application
 * @param {*} props
 * @returns jsx
 */
const Home = ({ handleCart }) => {
  // states are added below for home component
  const [selectedDetails, setSelectedDetails] = useState({
    label: 'Electronics',
    selectedOption: 'Computers',
    id: 1,
  });
  const [CardData, setCardData] = useState([]);

  // accordianData is the data for the left side accordian contents
  const accordianData = [
    {
      label: 'Electronics',
      options: ['Computers', 'Phones', 'Televisions'],
      id: 1,
    },
    {
      label: 'Home Decor',
      options: [],
      id: 2,
    },
    {
      label: 'Fashion',
      options: [],
      id: 3,
    },
    {
      label: 'Books',
      options: [],
      id: 4,
    },
  ];

  // itemsData is the data for the cards in the app
  const itemsData = [
    {
      category: 'Computers',
      data: [
        {
          title: 'Lenovo Thinkpad',
          subDesc: 'Best for Professionals.',
          description:
            'ThinkPads are more than just laptops; they’re reliable work companions trusted by professionals worldwide. If you’re looking for a laptop that combines performance, durability, and security, a ThinkPad might be the perfect choice!',
        },
        {
          title: 'Macbook Pro',
          subDesc: 'Best for Mac os fans.',
          description:
            'MacBook Pro is designed for professionals who demand top-tier performance, whether you’re a developer, designer, or content creator. It’s a reliable workhorse that combines elegance with productivity!',
        },
        {
          title: 'Dell XPS',
          subDesc: 'Best in the battery.',
          description:
            'Whether you’re a creative professional, power user, or someone who appreciates sleek design, the Dell XPS lineup has something to offer.',
        },
        {
          title: 'HP Pavillion',
          subDesc: 'Best for budget.',
          description:
            'Whether you’re a student, professional, or casual user, HP Pavilion laptops provide a solid computing experience without breaking the bank.',
        },
        {
          title: 'Asus ROG',
          subDesc: 'Best for Gaming!!',
          description:
            'Whether you’re a competitive gamer, a tech enthusiast, or someone who simply appreciates cutting-edge hardware, ASUS ROG has something to offer. So, gear up and embrace the power of ROG!',
        },
      ],
    },
    {
      category: 'Phones',
      data: [
        {
          title: 'Samsung S24',
          subDesc: 'Top Flagship Smartphone in Android.',
          description:
            'The Galaxy S24 is epic, just like that! Whether you’re capturing memories, staying productive, or exploring new features, it’s a smartphone that delivers. ',
        },
        {
          title: 'iphone 15',
          subDesc: 'Latest Flagship Smartphone in ios.',
          description:
            'Whether you’re upgrading from a previous iPhone or joining the Apple ecosystem for the first time, the iPhone 15 offers a delightful experience!',
        },
        {
          title: 'Asus Rog 6',
          subDesc: 'Best Gaming Smartphone in Android.',
          description:
            'Whether you’re a casual gamer or a competitive esports player, the Asus ROG Phone 6 is a beast that won’t disappoint! ',
        },
        {
          title: 'vivo x100',
          subDesc: 'Best camera Smartphone from vivo.',
          description:
            'Remember that Vivo’s camera technology continues to evolve, so keep an eye out for their latest releases. Whether you’re a photography enthusiast or simply want great camera performance, Vivo has options to consider!',
        },
      ],
    },
    {
      category: 'Televisions',
      data: [
        {
          title: 'Toshiba UF3D',
          subDesc: 'best in budget segment.',
          description:
            'Remember, the Toshiba UF3D series offers a balance of affordability and functionality, especially for those who appreciate the convenience of Fire TV built-in. If you’re looking for a straightforward smart TV experience, these models are worth considering!',
        },
        {
          title: 'LG OLED65C1',
          subDesc: 'best in top segment.',
          description:
            'The LG OLED65C1 is a fantastic choice for home entertainment, whether you’re watching movies, playing games, or streaming your favorite shows!',
        },
      ],
    },
  ];

  // useEffect below updates the cardData whenever there is change in category
  useEffect(() => {
    const data = itemsData.filter(
      (data) => data.category === selectedDetails?.selectedOption
    );
    setCardData(data[0]?.data);
  }, [selectedDetails]);

  /**
   * handleDetails is used to update the selected category details
   * @param {*} data
   */
  const handleDetails = (data) => {
    setSelectedDetails(data);
  };

  /**
   * getLeftSideContent renders the left side accordians in the home page
   * @returns jsx
   */
  const getLeftSideContent = () => (
    <div>
      {accordianData?.map((data) => (
        <AccordionList
          data={data}
          details={selectedDetails}
          handleSelection={handleDetails}
          key={data?.id}
        />
      ))}
    </div>
  );

  /**
   * getRightSideContent renders the right side contents in the home page
   * @returns jsx
   */
  const getRightSideContent = () => (
    <div className='right-side-contents'>
      <div className='subcategory-detail'>
        {selectedDetails?.selectedOption}
      </div>
      {CardData?.length ? (
        <Grid2
          container
          spacing={{ xs: 4, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {CardData?.map((data) => (
            <Grid2 key={data?.title} size={{ xs: 4, sm: 4, md: 4 }}>
              <DetailCard
                title={data.title}
                subDesc={data.subDesc}
                description={data.description}
                handleCartAction={handleCart}
              />
            </Grid2>
          ))}
        </Grid2>
      ) : null}
    </div>
  );

  return (
    <div className='home-page-container'>
      <div className='left-side-container'>{getLeftSideContent()}</div>
      <div className='right-side-container'>{getRightSideContent()}</div>
    </div>
  );
};

export default Home;
