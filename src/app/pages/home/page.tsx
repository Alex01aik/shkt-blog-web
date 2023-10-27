// const [image, setImage] = useState<any>(null);
//   const fileSelect = (event: any): void => {
//     const file = event.target.files[0];
//     setImage(file);
//   };
//   const upload = async () => {
//     const formData = new FormData();
//     formData.append("file", image);

//     await fetch("http://localhost:3001/media", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("data", data);
//       });
//   };
import PostGrid from "@/app/components/PostGrid";
import "./styles.css";

const Home: React.FC = () => {
  return (
    <div id="homePage">
      <PostGrid />
    </div>
  );
};

export default Home;
