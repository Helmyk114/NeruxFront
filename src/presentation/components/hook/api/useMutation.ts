import { useState } from "react";

type MutationAction<TInput, TOutput> = (input: TInput) => Promise<TOutput>;

export function useMutation<TInput, TOutput>(
  mutationAction: MutationAction<TInput, TOutput>,
  {
    onSuccess,
    onError,
  }: {
    onSuccess?: (data: TOutput) => void;
    onError?: (error: Error) => void;
  } = {}
) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<TOutput | null>(null);

  const mutate = async (input: TInput) => {
    try {
      setLoading(true);
      setError(null);
      const res = await mutationAction(input);
      setData(res);
      if (onSuccess) onSuccess(res);
      return res;
    } catch (error) {
      const err = error as Error;
      setError(err);
      if (onError) onError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { mutate, data, loading, error };
}
