import {
  AutoTokenizer,
  CLIPTextModelWithProjection,
  PreTrainedModel,
  PreTrainedTokenizer,
  // @ts-ignore
} from '@xenova/transformers'

const tokenizer = await AutoTokenizer.from_pretrained(
  'Xenova/clip-vit-base-patch16',
)

const model = await CLIPTextModelWithProjection.from_pretrained(
  'Xenova/clip-vit-base-patch16',
)

export const getEmbedding = async (text: string) => {
  const textInputs = tokenizer([text], { padding: true, truncation: true })
  const output = await model({ ...textInputs })
  return output.text_embeds.data as Float32Array
}

console.log(await getEmebedding("hi"))
