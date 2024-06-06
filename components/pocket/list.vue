<template>
  <div>
    <Card>
      <CardHeader>
        <CardTitle>{{ name }}</CardTitle>
        <CardDescription>
          {{ descreption }}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead v-for="head in fields.map((field) => field.label)">{{ head }}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="item in data?.items">
              <TableCell class="align-top" v-for="cell in fields.map((field) => field.name)">
                {{ item[cell] }}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter>
        <div class="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong>
          products
        </div>
      </CardFooter>
    </Card>
  </div>
</template>

<script lang="ts" setup>
const page = ref(1);
const props = defineProps<{
  fields: Array<{
    name: string;
    type: string;
    label: string;
  }>;
  name: string;
  descreption: string;
}>();

const {
  data,
  error,
  execute,
} = await useAsyncData(async () => {
  const records = await pb().collection(props.name).getList(page.value, 10, {
    fields: props.fields.map((field) => field.name).concat(['id', 'created']).join(),
  });

  return structuredClone(records);
},
  {
    watch: page,
  }
);

execute();

</script>

<style></style>