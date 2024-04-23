import PostGrid from "@/app/components/PostGrid";
import "./styles.css";
import Link from "next/link";
import Button from "@/app/components/Button";

const Home: React.FC = () => {
  return (
    <div id="adminPostsPage">
      <div id="adminPostsPagePanel">
        <Link href={`/admin/posts/new`}>
          <Button>Create new</Button>
        </Link>
      </div>
      <PostGrid isAdmin />
    </div>
  );
};

export default Home;
