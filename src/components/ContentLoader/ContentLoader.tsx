import ContentLoader from "react-content-loader";

const MyLoader = () => (
    <ContentLoader
        speed={2}
        width={400}
        height={200}
        viewBox="0 0 400 200"
        backgroundColor="#2C2D2D"
        foregroundColor="#545454"
    >
        <rect x="4" y="13" rx="0" ry="0" width="84" height="87" />
        <rect x="10" y="113" rx="0" ry="0" width="443" height="133" />
        <rect x="105" y="17" rx="0" ry="0" width="298" height="37" />
        <rect x="111" y="67" rx="0" ry="0" width="145" height="32" />
    </ContentLoader>
);

export default MyLoader;
