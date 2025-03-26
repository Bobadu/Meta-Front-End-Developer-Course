
const review = {
    title: "Amazing Product",
    description: "This product exceeded my expectations.",
    author: "John Doe",
    timePosted: "2024-11-24"
};

const { author, title, timePosted } = review;

console.log(`${author} posted a review titled, ${title} at ${timePosted}.`);