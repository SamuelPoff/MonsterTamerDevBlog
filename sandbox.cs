public class Sprite : Drawable
    {

        public Texture2D Texture;
        public Vector2 Position = Vector2.Zero;
        public Vector2 Offset = Vector2.Zero; //Drawing offset (Not a physical offset that would affect physical properties such as draw order)


        public Sprite(Texture2D texture) {

            TextureAtlas = atlas;
            SubtextureName = name;

            SubRect = TextureAtlas.GetSubTextureSource(name);

        }

        public override void Draw(SpriteBatch spritebatch) {

            Rectangle sourceRect = new Rectangle(0,0,Texture.Width, Texture.Height);
            Rectangle destRect = new Rectangle((int)(Position.X + Offset.X), (int)(Position.Y - Position.Z + Offset.Y), sourceRect.Width * GameProperties.Scale, sourceRect.Height * GameProperties.Scale);

            spritebatch.Draw(Texture, destRect, sourceRect, Color.White);

        }


    }