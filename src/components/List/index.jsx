import React, { Component } from 'react';
import ListItem from '../ListItem';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          id: 1,
          firstName: 'Jason',
          lastName: 'Statham',
          imgSrc:
            'https://www.biography.com/.image/t_share/MTUzMzQzOTkxMDAwMDgxNzA2/jason-statham-attends-the-press-conference-of-director-f-gary-grays-film-the-fate-of-the-furious-on-march-23-2017-in-beijing-china-photo-by-vcg_vcg-via-getty-images-square.jpg',
          tagline: 'actor',
        },
        {
          id: 2,
          firstName: 'Dwayne',
          lastName: 'Johnson',
          imgSrc:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/800px-Dwayne_Johnson_2%2C_2013.jpg',
          tagline: 'actor',
        },
        {
          id: 3,
          firstName: 'Emma',
          lastName: 'Stone',
          imgSrc:
            'https://upload.wikimedia.org/wikipedia/commons/9/9a/Emma_Stone_at_the_39th_Mill_Valley_Film_Festival_%28cropped%29.jpg',
            tagline: 'actor',
        },
        {
          id: 4,
          firstName: 'Gabriel',
          lastName: 'Macht',
          imgSrc:
            'data:image/jpeg;base64,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',
            tagline: 'actor',
        },
        {
          id: 5,
          firstName: 'Scarlett',
          lastName: 'Johansson',
          imgSrc:
            'https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_.jpg',
            tagline: 'actor', 
        },
        {
          id: 6,
          firstName: 'Yevgeny',
          lastName: 'Ponasenkov',
          imgSrc:
            'https://www.factroom.ru/wp-content/uploads/2019/06/10-faktov-o-evgenii-ponasenkove-kotoryj-svodit-vsekh-s-uma-1250x883.jpg',
            tagline: 'actor',
        },
        {
          id: 7,
          firstName: 'Daniel',
          lastName: 'Day-Lewis',
          imgSrc:
            'https://i2.wp.com/comicbookdebate.com/wp-content/uploads/2019/07/There20will20be20blood202-750x460.jpg?resize=750%2C460&ssl=1',
            tagline: 'actor',
        },
        {
          id: 8,
          firstName: 'Matiu',
          lastName: 'Mcconaughey',
          imgSrc:
            'https://upload.wikimedia.org/wikipedia/commons/3/3b/Matthew_McConaughey_2011.jpg',
            tagline: 'actor',
        },
      ],
    };
  }

  filterItems = (filteredItem) => {
    this.setState({
      list: this.state.list.filter(
        (currentItem) => currentItem !== filteredItem
      ),
    });
  };

  renderListItems = () => {
    const { list } = this.state;
    return list.map((objUser) => (
      <ListItem
        obj={objUser}
        key={objUser.id}
        id={objUser.id}
        name={`${objUser.firstName} ${objUser.lastName}`}
        tagline={objUser.tagline}
        imgSrc={objUser.imgSrc}
        filterItems={this.filterItems}
      />
    ));
  };

  render() {
    return <ul>{this.renderListItems()} </ul>;
  }
}

export default List;
