from graphene import Field, ObjectType, String, ID
from graphene_federation import build_schema, key

@key("id")
class User(ObjectType):
    id = ID(required=True)
    username = String(required=True)

    def __resolve_reference(self, info, **kwargs):
        """
        Here we resolve the reference of the user entity referenced by its `id` field.
        """
        return User(id=self.id, email=f"user_{self.id}@mail.com")

class Query(ObjectType):
    me = Field(User)

schema = build_schema(query=Query)

if __name__ == "__main__":
    from graphql import graphql_sync
    result = graphql_sync(schema.graphql_schema, '{ _service { sdl } }')
    print(result.data["_service"]["sdl"].strip())
