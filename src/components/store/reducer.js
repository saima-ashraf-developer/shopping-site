import * as actionType from './actionType';


const initialState = [
    {
      label: 'Braslate',
      imgPath:
        'https://www.jsengineering.org/wp-content/uploads/2016/07/jewellery-design-2.jpg',
    },
    {
      label: 'Necklace',
      imgPath:
        'https://the-maharani-diaries-zxpo8io6akeffozy.netdna-ssl.com/media/2015/11/20032250/Bridal-Jewellery-Trends-for-the-Modern-Indian-Bride-Surya-Gold-3-The-Maharani-Diaries-1030x736.jpg',
    },
    {
      label: 'Shoes for baby girls',
      imgPath:
        'https://i.ebayimg.com/images/g/j9kAAOSwznZba-6P/s-l300.jpg',
    },
    {
      label: 'Sandles for babyies',
      imgPath:
        'https://www.dhresource.com/0x0/f2/albu/g9/M00/32/91/rBVaVVzdZyCAVKHBAAPCJr8QE1k504.jpg/children-s-infant-kids-fashion-crochet-sandals.jpg',
    },
    {
      label: 'Bags for Ladies',
      imgPath:
        'https://ae01.alicdn.com/kf/HLB1iyNIaZrrK1Rjy1zeq6xalFXab/Flower-Shoulder-Bags-Children-PU-Leather-Messenger-Bag-Girls-Crossbody-Bag-Kids-Small-Round-Satchel-Handbags.jpg_Q90.jpg_.webp',
    },
  ];

export default function Reducer(state= initialState, action){
    switch(action.type){
        case(actionType == ''):
        return{

        }
        default: return state
    }
}