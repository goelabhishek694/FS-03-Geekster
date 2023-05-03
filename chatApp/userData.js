// User Data for dynamic addition of users in user list...........................
const usersData = [
  {
    avatar:
      "https://hips.hearstapps.com/hmg-prod/images/gettyimages-942065100-copy.jpg?resize=1200:*",
    name: "John Mayers",
    time: "3 min ago",
    status: "Accountant",
  },
  {
    avatar:
      "https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_1280.jpg",
    name: "Tony Stark",
    time: "10 min ago",
    status: "Genius, Billionaire, Playboy, Philanthropist",
  },
  {
    avatar:
      "https://c4.wallpaperflare.com/wallpaper/739/10/526/scarlett-johansson-face-pink-lipstick-actress-wallpaper-preview.jpg",
    name: "S. Johansson",
    time: "3 hours ago",
    status: "Black Widow",
  },
  {
    avatar:
      "https://www.gannett-cdn.com/presto/2023/02/15/USAT/d22ad1a7-00ec-425f-b1c9-a643fcfcda9f-AFP_AFP_336E7FA.jpg",
    name: "Jeremy Renner",
    time: "4 hours ago",
    status: "Hawkeye",
  },
  {
    avatar: "https://flxt.tmsimg.com/assets/308495_v9_bb.jpg",
    name: "Anthony Mackie",
    time: "8 hours ago",
    status: "Falcon",
  },
  {
    avatar:
      "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRpW3LbFgFmL3wF7AxVmNPkfKKVTg3hdeDwJAkQ6ffgI1aqNQH-ofOktw9CRPIIPA8IRuPHc9YeW1BGdTI",
    name: "Chris Evans",
    time: "22 hours ago",
    status: "Captain America",
  },
  {
    avatar:
      "https://hips.hearstapps.com/hmg-prod/images/chris-hemsworth-poses-during-a-photo-call-for-thor-ragnarok-on-october-15-2017-in-sydney-australia-photo-by-mark-metcalfe_getty-images-for-disney-square.jpg?crop=1xw:0.75xh;center,top&resize=1200:*",
    name: "Chris Hemswoth",
    time: "1 day ago",
    status: "Thor the god of thunder",
  },
  {
    avatar: "https://www.emmys.com/sites/default/files/Mark-Ruffalo.jpg",
    name: "Mark Ruffalo",
    time: "Dec 10",
    status: "The Incrdible Hulk",
  },
  {
    avatar:
      "https://www.themoviedb.org/t/p/w500/mclHxMm8aPlCPKptP67257F5GPo.jpg",
    name: "Tom Hiddleston",
    time: "Dec 8",
    status: "Loki",
  },
  {
    avatar: "https://flxt.tmsimg.com/assets/71830_v9_bb.jpg",
    name: "Don Cheadle",
    time: "Dec 6",
    status: "Rhodey",
  },
  {
    avatar:
      "https://m.media-amazon.com/images/M/MV5BMTk3NDE3Njc5M15BMl5BanBnXkFtZTYwOTY5Nzc1._V1_.jpg",
    name: "Stan Lee",
    time: "Dec 4",
    status: "The Big Daddy",
  },
  {
    avatar:
      "https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_FMjpg_UX1000_.jpg",
    name: "S.L. Jackson",
    time: "Dec 2",
    status: "Shield",
  },
];

// Json data ...........................................
const JsonData = {
  chat1: [
    {
      from: {
        type: "user1",
      },
      msg: {
        message: "Hi, how can I help you?",
      },
    },
    {
      from: {
        type: "user2",
      },
      msg: {
        message:
          "Hi guys Ive got the O2 package and have really slow internet. A speed check online said i can get 3mbps but it seems more like 0.5 these days, just freezing and taking ages to open pages and open audio files for example. I have decided to switch to the UPC package which offers 10mbps but do you think i will get it?",
      },
    },
    {
      from: {
        type: "user1",
      },
      msg: {
        message:
          "Sure! I will definitely help you with you query. Could you please confirm your email address?",
      },
    },
    {
      from: {
        type: "user2",
      },
      msg: {
        message: "john.mayers@gmail.com",
      },
    },
  ],
  chat2: [
    {
      from: {
        type: "user1",
      },
      msg: {
        message: "Hi, how can I help you?",
      },
    },
    {
      from: {
        type: "user2",
      },
      msg: {
        message:
          "Hi, my computer is not working since yesterday. I need the computer to reboot my Iron Man suit. Could you please help me?",
      },
    },
    {
      from: {
        type: "user1",
      },
      msg: {
        message:
          "Sure! I will definitely help you with you query. Could you please confirm your email address?",
      },
    },
    {
      from: {
        type: "user2",
      },
      msg: {
        message: "tony.stark@gmail.com",
      },
    },
  ],
};
