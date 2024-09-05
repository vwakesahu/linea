import { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner";
import Loader from "./loader";

export function ContactAbhi({ w0, setFetch }) {
  const [loading, setLoading] = useState(false);

  const handleGetMCX = async () => {
    setLoading(true);
    try {
      toast.info("Hang tight! Sending MCX tokens...");
      const { data } = await axios.post(
        "https://get-music-x.vercel.app/sendTokens",
        { receiverAddress: w0.address }
      );
      setFetch(Math.random());
      toast.success("MCX tokens sent successfully!");
    } catch (error) {
      toast.error("An error occurred while sending MCX tokens.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        variant="outline"
        className="dark:text-white"
        onClick={handleGetMCX}
        disabled={loading}
      >
        {loading ? (
          <div className="px-4">
            <Loader noWidth={true} />
          </div>
        ) : (
          "Claim MCX ?"
        )}
      </Button>
    </>
  );
}
