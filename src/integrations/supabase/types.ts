export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.4"
  }
  public: {
    Tables: {
      ai_assessments: {
        Row: {
          coach_note: string | null
          control_detail: string | null
          control_tag: string
          created_at: string
          id: string
          nft_token_id: number | null
          power_detail: string | null
          power_tag: string
          skill_card_image_url: string | null
          technique_detail: string | null
          technique_tag: string
          video_id: string
          xfactor_detail: string | null
          xfactor_tag: string
        }
        Insert: {
          coach_note?: string | null
          control_detail?: string | null
          control_tag?: string
          created_at?: string
          id?: string
          nft_token_id?: number | null
          power_detail?: string | null
          power_tag?: string
          skill_card_image_url?: string | null
          technique_detail?: string | null
          technique_tag?: string
          video_id: string
          xfactor_detail?: string | null
          xfactor_tag?: string
        }
        Update: {
          coach_note?: string | null
          control_detail?: string | null
          control_tag?: string
          created_at?: string
          id?: string
          nft_token_id?: number | null
          power_detail?: string | null
          power_tag?: string
          skill_card_image_url?: string | null
          technique_detail?: string | null
          technique_tag?: string
          video_id?: string
          xfactor_detail?: string | null
          xfactor_tag?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_assessments_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: true
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      comments: {
        Row: {
          content: string
          created_at: string
          id: string
          user_id: string
          video_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          user_id: string
          video_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          user_id?: string
          video_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      follows: {
        Row: {
          created_at: string
          follower_id: string
          following_id: string
          id: string
        }
        Insert: {
          created_at?: string
          follower_id: string
          following_id: string
          id?: string
        }
        Update: {
          created_at?: string
          follower_id?: string
          following_id?: string
          id?: string
        }
        Relationships: []
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          message: string
          read: boolean
          related_id: string | null
          title: string
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          message?: string
          read?: boolean
          related_id?: string | null
          title?: string
          type?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          read?: boolean
          related_id?: string | null
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: []
      }
      player_interests: {
        Row: {
          created_at: string
          id: string
          message: string | null
          player_id: string
          read: boolean
          selector_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          message?: string | null
          player_id: string
          read?: boolean
          selector_id: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string | null
          player_id?: string
          read?: boolean
          selector_id?: string
        }
        Relationships: []
      }
      player_profiles: {
        Row: {
          age: number | null
          city_rank: number
          created_at: string
          id: string
          national_rank: number
          playing_role: string
          total_support_count: number
          user_id: string
        }
        Insert: {
          age?: number | null
          city_rank?: number
          created_at?: string
          id?: string
          national_rank?: number
          playing_role?: string
          total_support_count?: number
          user_id: string
        }
        Update: {
          age?: number | null
          city_rank?: number
          created_at?: string
          id?: string
          national_rank?: number
          playing_role?: string
          total_support_count?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "player_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          city: string | null
          created_at: string
          full_name: string
          id: string
          phone: string | null
          role: string
          updated_at: string
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          city?: string | null
          created_at?: string
          full_name?: string
          id: string
          phone?: string | null
          role?: string
          updated_at?: string
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          city?: string | null
          created_at?: string
          full_name?: string
          id?: string
          phone?: string | null
          role?: string
          updated_at?: string
          username?: string | null
        }
        Relationships: []
      }
      selector_applications: {
        Row: {
          created_at: string
          designation: string
          id: string
          organization: string
          reason: string
          reviewed_at: string | null
          reviewed_by: string | null
          status: string
          user_id: string
        }
        Insert: {
          created_at?: string
          designation?: string
          id?: string
          organization?: string
          reason?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          user_id: string
        }
        Update: {
          created_at?: string
          designation?: string
          id?: string
          organization?: string
          reason?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      shortlists: {
        Row: {
          created_at: string
          id: string
          note: string | null
          player_id: string
          selector_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          note?: string | null
          player_id: string
          selector_id: string
        }
        Update: {
          created_at?: string
          id?: string
          note?: string | null
          player_id?: string
          selector_id?: string
        }
        Relationships: []
      }
      supports: {
        Row: {
          created_at: string
          fan_id: string
          id: string
          player_id: string
          season: number
          token_cost: number
        }
        Insert: {
          created_at?: string
          fan_id: string
          id?: string
          player_id: string
          season?: number
          token_cost?: number
        }
        Update: {
          created_at?: string
          fan_id?: string
          id?: string
          player_id?: string
          season?: number
          token_cost?: number
        }
        Relationships: [
          {
            foreignKeyName: "supports_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      token_balances: {
        Row: {
          balance: number
          id: string
          user_id: string
        }
        Insert: {
          balance?: number
          id?: string
          user_id: string
        }
        Update: {
          balance?: number
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      token_transactions: {
        Row: {
          action: string
          amount: number
          created_at: string
          description: string | null
          id: string
          transaction_type: string
          user_id: string
        }
        Insert: {
          action?: string
          amount: number
          created_at?: string
          description?: string | null
          id?: string
          transaction_type: string
          user_id: string
        }
        Update: {
          action?: string
          amount?: number
          created_at?: string
          description?: string | null
          id?: string
          transaction_type?: string
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      videos: {
        Row: {
          created_at: string
          duration_seconds: number | null
          id: string
          likes_count: number
          player_id: string
          status: string
          support_count: number
          thumbnail_url: string | null
          title: string | null
          video_url: string
          views_count: number
        }
        Insert: {
          created_at?: string
          duration_seconds?: number | null
          id?: string
          likes_count?: number
          player_id: string
          status?: string
          support_count?: number
          thumbnail_url?: string | null
          title?: string | null
          video_url: string
          views_count?: number
        }
        Update: {
          created_at?: string
          duration_seconds?: number | null
          id?: string
          likes_count?: number
          player_id?: string
          status?: string
          support_count?: number
          thumbnail_url?: string | null
          title?: string | null
          video_url?: string
          views_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "videos_player_id_fkey"
            columns: ["player_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      approve_selector: {
        Args: { p_application_id: string }
        Returns: undefined
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      increment_support_count: {
        Args: { p_player_id: string }
        Returns: undefined
      }
      upgrade_to_player: { Args: never; Returns: undefined }
    }
    Enums: {
      app_role: "fan" | "player" | "selector" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["fan", "player", "selector", "admin"],
    },
  },
} as const
