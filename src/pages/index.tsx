import { Button } from "@/components/button/button";
import { InputField } from "@/components/form/input-field";
import { Link } from "@/components/link/link";

const LandingPage = () => {
  return (
    <div>
      <Button variant="solid" type="button">
        Click Me
      </Button>
      <InputField label="Name" />
      <Link href="/">Home</Link>
    </div>
  );
};
export default LandingPage;
