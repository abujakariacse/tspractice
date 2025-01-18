{
  // generic with interface
  interface Developer<T, U> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: U;
  }

  interface EnvolveWatch {
    name: string;
    model: string;
    price: number;
  }

  const poorDeveloper: Developer<EnvolveWatch, null> = {
    name: "Abu Jakaria",
    computer: {
      brand: "HP",
      model: "HU6363",
      releaseYear: 2020,
    },
    smartWatch: {
      name: "Envolve",
      model: "en37232",
      price: 4500,
    },
  };

  interface AppleWatch {
    name: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface BikeInfo {
    brand: string;
    model: string;
    topSpeed: number;
  }
  const richDeveloper: Developer<AppleWatch, BikeInfo> = {
    name: "Jack",
    computer: {
      brand: "Macbook",
      model: "Mini",
      releaseYear: 2024,
    },
    smartWatch: {
      name: "Apple Watch",
      model: "Apple watch 6",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      brand: "Yahama",
      model: "MT15",
      topSpeed: 120,
    },
  };

  console.log(poorDeveloper);
}
